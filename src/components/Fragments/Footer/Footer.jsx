const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md">
      <strong className="block text-center text-lg font-bold text-gray-900 sm:text-xl">
        Want us to email you with the latest blockbuster news?
      </strong>

      <form className="mt-4">
        <div className="relative max-w-lg">
          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-2 pe-28 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />
          <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-2 text-xs font-medium text-white transition hover:bg-blue-700">
            Send
          </button>
        </div>
      </form>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <p className="mt-4 text-center text-gray-500 text-sm lg:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          natus quod eveniet aut perferendis distinctio iusto repudiandae,
          provident velit earum?
        </p>

        <div className="mt-4 flex justify-center gap-3 lg:justify-start">
          <a className="text-gray-700 hover:text-gray-700/75" href="#">
            <svg className="size-4" />
          </a>
          <a className="text-gray-700 hover:text-gray-700/75" href="#">
            <svg className="size-4"  />
          </a>
          <a className="text-gray-700 hover:text-gray-700/75" href="#">
            <svg className="size-4"  />
          </a>
          <a className="text-gray-700 hover:text-gray-700/75" href="#">
            <svg className="size-4"  />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Footer;
