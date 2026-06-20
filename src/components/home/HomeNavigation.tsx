const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Education", href: "#education" },
];

export default function HomeNavigation() {
  return (
    <nav aria-label="Home sections" className="font-mono text-sm font-semibold">
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-muted-foreground">
        {navItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-x-8">
            <a href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
            {index < navItems.length - 1 && (
              <span aria-hidden="true" className="text-border">
                /
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
