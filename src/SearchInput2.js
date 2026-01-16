import './searchInput.scss';

export default function SearchInput2({ value, onChange, onClear }) {
  function handleOnChange(ev) {
    onChange(ev.target.value);
  }

  function handleOnSubmit(ev) {
    ev.preventDefault();
  }

  function handleClear() {
    onClear();
  }

  return (
    <div id="searchbox2">
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="sbx2-icon-search" viewBox="0 0 40 40">
          <path
            d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
            fillRule="evenodd"
          />
        </symbol>
        <symbol id="sbx2-icon-clear" viewBox="0 0 20 20">
          <path
            d="M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z"
            fillRule="evenodd"
          />
        </symbol>
      </svg>

      <form
        noValidate="novalidate"
        onSubmit={handleOnSubmit}
        className="searchbox sbx-medium"
      >
        <div role="search" className="sbx-medium__wrapper">
          <input
            type="search"
            name="search2"
            placeholder="Search categories or words"
            autoComplete="off"
            className="sbx-medium__input"
            value={value}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            title="Submit your search query."
            className="sbx-medium__submit"
          >
            <svg role="img" aria-label="Search">
              <use xlinkHref="#sbx2-icon-search" />
            </svg>
          </button>
          <button
            type="reset"
            title="Clear the search query."
            className="sbx-medium__reset"
            onClick={handleClear}
          >
            <svg role="img" aria-label="Reset">
              <use xlinkHref="#sbx2-icon-clear" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
