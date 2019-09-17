const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,

      validate(value) {
        if (!validator.isEmail(value)) throw new Error("Email not valid");
      }
    },
    password: {
      type: String
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

profileSchema.statics.findByCredentials = async (email, password) => {
  const profile = await Profiles.findOne({ email });
  if (!profile) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, profile.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return profile;
};
profileSchema.statics.findByCredentialsEmail = async email => {
  const profile = await Profiles.findOne({ email });
  if (!profile) {
    throw new Error("Email Not Exists");
  }

  return profile;
};
profileSchema.methods.toJSON = function() {
  const profile = this;
  const publicProfileData = profile.toObject();
  delete publicProfileData.password;
  delete publicProfileData.tokens;
  return publicProfileData;
};
profileSchema.methods.generateAuthToken = async function() {
  const profile = this;

  const token = jwt.sign(
    { _id: profile._id.toString() },
    process.env.JWT_SECRET
  );

  profile.tokens = profile.tokens.concat({ token });
  await profile.save();
  return token;
};
profileSchema.pre("save", async function(next) {
  const profile = this;
  if (profile.isModified("password"))
    profile.password = await bcrypt.hash(profile.password, 8);

  next();
});

const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles;
