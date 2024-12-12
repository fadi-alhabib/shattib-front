import React, { useState } from "react";
import {
  goldEngineerIcon,
  Button,
  closeCircleIcon,
  TextInput,
  useEngineerRequest,
  useApi, // Import your API hook
} from "..";

const EngineerRequestCardModal = () => {
  const { isShownEngineerRequestModal, setIsShownEngineerRequestModal } =
    useEngineerRequest();

  // Track form state
  const [formData, setFormData] = useState({
    phoneNumber: "",
    consultationTopic: "",
    engineerSpecification: "",
    projectCategory: "",
    details: "",
    // status: "pending",
    // dateOfRequest: "2024-11-08", // Default date (can be dynamic if needed)
  });

  const { postData, isLoading, error } = useApi(
    "Consultations",
    "POST",
    true,
    true
  ); // Assume this handles token as well

  // Function to handle form field changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      await postData(formData); // POST the form data to the API
      if (error) {
        alert("حدث خطأ، يرجى المحاولة مرة أخرى.");
      } else {
        setIsShownEngineerRequestModal(false); // Close the modal on success
        alert("طلبك تم إرساله بنجاح!"); // Optional success message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("حدث خطأ في الاتصال. الرجاء المحاولة لاحقاً.");
    }
  };

  // Prevent body scrolling when modal is shown
  if (isShownEngineerRequestModal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return isShownEngineerRequestModal ? (
    <main className="fixed top-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative rounded-2xl bg-white w-1/2 pt-8">
        <button
          onClick={() => setIsShownEngineerRequestModal(false)}
          className="absolute top-4 left-4 z-10"
        >
          <img src={closeCircleIcon} alt="" />
        </button>
        <div className="flex justify-center items-center">
          <h1 className="text-lg">طلب مهندس</h1>
          <img className="ps-4" src={goldEngineerIcon} alt="" />
        </div>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex">
            <div className="w-full px-8 flex flex-col gap-4">
              <TextInput
                blackTitle
                title="رقم الهاتف"
                placeholder="رقم الهاتف"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <TextInput
                blackTitle
                title="اختصاص المهندس"
                placeholder="اختصاص المهندس"
                name="engineerSpecification"
                value={formData.engineerSpecification}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full px-8 flex flex-col gap-4">
              <TextInput
                blackTitle
                title="موضوع الطلب"
                placeholder="موضوع الطلب"
                name="consultationTopic"
                value={formData.consultationTopic}
                onChange={handleInputChange}
              />
              <TextInput
                blackTitle
                title="نوع المشروع"
                placeholder="نوع المشروع"
                name="projectCategory"
                value={formData.projectCategory}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full h-44 px-8">
            <TextInput
              big
              blackTitle
              title="تفاصيل الطلب"
              placeholder="تفاصيل ومعلومات إضافية"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="w-48">
              <Button size="md" onClick={handleSubmit}>
                {isLoading ? "جاري الإرسال..." : "إرسال الطلب"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : null;
};

export default EngineerRequestCardModal;
