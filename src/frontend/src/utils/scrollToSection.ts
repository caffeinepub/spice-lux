/**
 * Smoothly scrolls to a section by ID
 * Accounts for sticky navbar height
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbarHeight = 64; // Height of sticky navbar (h-16 = 4rem = 64px)
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
