const path = require("path");
const { BadrequestError } = require("../errors");

const uploadImage = async (req, res) => {
  console.log(req.files);

  const userPicture = req.files.userPicture;
  console.log(userPicture.mimetype);

  if (!req.files) {
    throw new BadrequestError("Please upload image,no file uploaded");
  }

  if (!userPicture.mimetype.startsWith("image")) {
    throw new BadrequestError("Please upload Image");
  }

  const maxSize = 1024 * 1024;
  if (userPicture.size > maxSize) {
    throw new BadrequestError(`Please upload image smaller than ${maxSize}`);
  }
  // userPicture

  const userPictturePath = path.join(
    __dirname,
    `../public/images_upload/${userPicture.name}`
  );

  await userPicture.mv(userPictturePath);

  return res
    .status(201)
    .json({ userPicture: { src: `images_upload/${userPicture.name}` } });
};

module.exports = uploadImage;
