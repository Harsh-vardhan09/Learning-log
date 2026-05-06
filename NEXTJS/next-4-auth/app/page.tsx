import { getServerSession } from "next-auth";


export default async function app(){

  const session =await getServerSession();
  return (
    <div>
      hi there
      {JSON.stringify(session)}
    </div>
  );
};

