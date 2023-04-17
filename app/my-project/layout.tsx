function ProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-300 w-screen overflow-y-hidden overflow-x-hidden h-screen relative">{children}</div>;
}

export default ProjectLayout;
