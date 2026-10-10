const categories = ['All', 'Weddings', 'Pre-Wedding']

function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-6 font-body text-sm uppercase tracking-wide mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`transition-colors pb-1 border-b ${
            active === cat
              ? 'text-bone border-safelight'
              : 'text-fog border-transparent hover:text-bone'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter