import { NextApiHandler } from 'next';

import prisma from '../../../lib/prisma';

const handle: NextApiHandler = async (req, res) => {
  const postId = req.query.id as string;
  const post = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      published: true,
    },
  });

  res.json(post);
};

export default handle;
