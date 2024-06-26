export function Logo(props) {
  return (
    <svg width="500" height="100" viewBox="0 0 200 100" {...props}>
      {/* Diagonal Line 1 */}
      <line x1="10" y1="10" x2="50" y2="50" stroke="#3B82F6" strokeWidth="6" />
      {/* Diagonal Line 2 */}
      <line x1="25" y1="10" x2="65" y2="50" stroke="#93C5FD" strokeWidth="6" />
      {/* Text "TechResearch" */}
      <text
        x="70"
        y="50"
        fontFamily="Trebuchet MS"
        fontSize="40"
        fill="#0F172A"
      >
        VandaVision()
      </text>
    </svg>
  )
}
