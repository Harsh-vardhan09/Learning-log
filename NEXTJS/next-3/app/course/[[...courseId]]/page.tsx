export default async function coursePage({ params }: any) {
  const courseId = (await params).courseId;

  return (
    <div className="text-lg font-bold">
      hi there <br />
       blog Page {JSON.stringify(courseId)}
      <br />
      hello
    </div>
  );
}
