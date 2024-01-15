import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {/*  kalo linkgref dan linktitle ada kasih link kalo gak */}
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
