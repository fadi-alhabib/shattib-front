interface Props {
  second?: boolean;
}

const NewProductHeaderText = ({ second = false }: Props) => {
  return (
    <>
      <section className="flex whitespace-nowrap px-main pt-main pb-8">
        <h1 className="text-primary font-bold text-heading01">
          إضافة منتج جديد
        </h1>

        <div className="w-1/2 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-gray-100 w-72 h-12">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex justify-center items-center">
              1
            </div>
            <div className="h-1 w-16 bg-primary" />
            <div
              className={
                second
                  ? "h-8 w-8 rounded-full bg-primary text-white flex justify-center items-center"
                  : "h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center"
              }
            >
              2
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen">
        <hr />
      </div>
    </>
  );
};

export default NewProductHeaderText;
