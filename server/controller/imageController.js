import File from "../models/file.js";

export const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    response.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    file.downloadCount++; // Corrected the property name from 'downloadContent' to 'downloadCount'

    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: error.message }); // Corrected the variable name from 'message' to 'error.message'
  }
};