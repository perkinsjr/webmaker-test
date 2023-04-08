function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-400 w-full h-full grid place-items-center">{children}</div>;
}

export default ProjectLayout;
