import { CloudUpload, X } from "lucide-react";
import React from "react";

const FileUpload = ({
  handleMultiImages,
  selectedImages,
  handleRemoveImages,
}) => {
  return (
    <div>
      <div className=" flex my-[15px] gap-[10px]">
        {selectedImages?.map((media, index) => (
          <div
            key={index}
            className="relative h-24 w-24 border rounded overflow-hidden"
          >
            <img
              src={media.preview}
              alt={media.name}
              className="object-cover w-full h-full"
            />
            <button
              type="button"
              onClick={() => handleRemoveImages(index)}
              className="absolute top-0 right-0 bg-white rounded-bl px-1"
            >
              <X className="h-4 w-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>
      {selectedImages?.length < 5 && (
        <label className="flex flex-col items-center justify-center h-24 border-2 border-dashed rounded-lg cursor-pointer hover:bg-blue-50">
          <CloudUpload className="w-6 h-6 text-blue-500" />
          <span className="text-xs text-gray-500 mt-1">Upload</span>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleMultiImages}
          />
        </label>
      )}
    </div>
  );
};

export default FileUpload;
