import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
    messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
    profileImg: String, 
    createdAt: Date,
		// createdAt, updatedAt => Member since <createdAt>
	},
	{ timestamps: true }
);


const setImageUrl=(doc) =>{
  if(doc.profileImg){
    const imageUrl= `${process.env.BASE_URL}/${doc.profileImg}`

    doc.profileImg = imageUrl
  }
}
userSchema.post('init', (doc) =>{
  setImageUrl(doc)
})

userSchema.post('save', (doc) =>{
  setImageUrl(doc)

})


const User = mongoose.model("User", userSchema);

export default User;
