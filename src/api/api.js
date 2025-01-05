export function getContactInfo() {
  return [
    {
      content: "hello@jacobli.me",
      href: "mailto:hello@jacobli.me",
      type: "Email",
    },
    {
      content: "jacobbli",
      href: "https://github.com/jacobbli",
      type: "Github",
    },
    {
      content: "jacobbli",
      href: "https://linkedin.com/in/jacobbli/",
      type: "LinkedIn",
    }
  ]
}

export function getRoutes(isMobile) {
  const routes = [
    {
      target: '/home',
      label: "Home"
    },
    {
      target: '/projects',
      label: "Projects"
    },
    {
      target: '/resume/skills',
      label: "Resume"
    }
  ]


  return isMobile ? routes.concat({
    target: '/contact',
    label: "Contact"
  }) : routes
}