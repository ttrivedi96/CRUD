import mongoose from "mongoose";

/* UserSchema will correspond to a collection in your MongoDB database. */

const UserSchema = new mongoose.Schema({
  name: {
    /* The name of the user */
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  email: {
    /* The email of the user */
    type: String,
    required: true,
  },
  password: {
    /* The password of the user */
    type: String,
    required: true,
  },
  address: {
      type: String,
      required: true,
  },
  contact:{
    type: Number,
    required: true,
  },
});
export default mongoose.models.Users || mongoose.model("Users", UserSchema);
