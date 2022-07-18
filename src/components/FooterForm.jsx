const FooterForm = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <p className="text-2xl font-bold">
        Join the adventure newsletter to receive our best vacation deals
      </p>
      <p className="text-xl font-bold">You can unsubscribe at any time.</p>
      <form className="flex flex-col justify-center items-center gap-4">
        <input
          className="px-3 py-2 rounded-sm text-neutral-800 text-lg focus:outline focus:outline-gray-50"
          type="text"
          placeholder="Your email"
        />
        <button className="w-full border border-r-gray-50 py-2 rounded-sm font-bold text-xl transition-all hover:bg-gray-50 hover:text-neutral-800">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default FooterForm;
