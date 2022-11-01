import { PrismaClient } from '@prisma/client';
type Props = {};
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}
const getData = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.karyawan.findMany();
  console.log(posts);
  return posts;
};
const Absensi = asyncComponent(async (props: Props) => {
  const posts = await getData();

  return (
    <div>
      <div>
        {posts.map((post: any) => (
          <p key={post.id}>{post.nama}</p>
        ))}
      </div>
    </div>
  );
});

export default Absensi;
