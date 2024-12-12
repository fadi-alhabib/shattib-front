import { uploadIcon, useState, useRef } from "..";

interface Props {
  title: string;
  subTitle: string;
  onImageChange?: (image: File) => void; // Accepts a File object when an image is selected
}

const UploadFile = ({ title, subTitle, onImageChange }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageChange) {
      onImageChange(file); // Call the passed in function to update formData
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Set the image preview source
      };
      reader.readAsDataURL(file); // Read the image as a data URL for preview
    }
  };

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <span className="text-lg font-bold mb-4">{title}</span>
      <div
        className="flex justify-center items-center w-full h-full rounded-xl border-dashed border-gray-200 border-8 bg-gray-100 hover:bg-yellow-50 transition-all duration-700 cursor-pointer"
        onClick={handleClick} // Open file picker on click
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          {imageSrc ? (
            <img
              className="w-full h-full object-cover"
              src={imageSrc}
              alt="Uploaded"
            /> // Show uploaded image preview
          ) : (
            <>
              <img className="w-16" src={uploadIcon} alt="" />
              <span className="text-blue-950 font-bold">{subTitle}</span>
            </>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadFile;
