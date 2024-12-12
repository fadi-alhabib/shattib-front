import {
  TextInput,
  emailIcon,
  lockIcon,
  Button,
  registerBanner,
  Link,
  useApi,
  Navigate,
  useState,
} from "..";
import { Login } from "../models/Login";

const LoginPage = () => {
  const { postData, isLoading, error, data } = useApi<Login>(
    "Accounts/Login",
    "POST"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Function to handle login
  const handleLogin = async () => {
    await postData(formData);

    if (data?.accessToken) {
      // Save tokens in localStorage
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Navigate to the home page
      return <Navigate to="/home" />;
    } else {
      console.error("Login failed", data);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {data ? (
        <>
          {localStorage.setItem("accessToken", data.accessToken)}
          <>{console.log(data, "from body of login first line")}</>
        </>
      ) : null}
      {data ? <Navigate to={"/home"} /> : null}
      <div className="flex max-md:flex-col justify-center items-center min-h-screen">
        <div className="w-1/4 max-md:w-1/2 flex flex-col justify-center">
          <span className="text-yellow-600 text-2xl pb-4">
            أهلاً بك في شطّب!
          </span>
          <span className="text-2xl">أنشاء حساب</span>
          <form className="py-4" action="">
            <TextInput
              name="email"
              title="البريد الالكتروني"
              icon={emailIcon}
              onChange={handleInputChange}
            />
            <TextInput
              name="password"
              password={true}
              title="كلمة المرور"
              icon={lockIcon}
              onChange={handleInputChange}
            />
          </form>
          <div className="flex flex-col items-center">
            <Button onClick={handleLogin}>
              {isLoading ? "جاري التسجيل..." : "تسجيل الدخول"}
            </Button>
            {error ? (
              <span className="pt-4 text-red-600 font-bold">
                حدث خطأ! الرجاء إعادة المحاولة
              </span>
            ) : null}
            <span className="pt-4">
              ليس لديك حساب؟{" "}
              <Link to={"/register"}>
                <button>
                  <span className="text-yellow-600 underline">أنشئ حساب</span>
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="px-8"></div>
        <div>
          <img src={registerBanner} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
