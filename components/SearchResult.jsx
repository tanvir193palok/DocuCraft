import Link from "next/link";

const SearchResult = ({ results, searchedTerm, closeSearchResults }) => {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p className="!text-lg">
        Showing results for
        <span className="font-semibold">&quot;{searchedTerm}&quot;:</span>
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {results.map((result) => (
          <li key={result.id} className="">
            <Link
              className="transition-all hover:text-emerald-600"
              href={`/docs/${result.id}`}
              onClick={(e) => closeSearchResults(e)}
            >
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
