import { NextApiHandler } from 'next';

import prisma from '../../../lib/prisma';

const handler: NextApiHandler = async (req, res) => {
  const postId = req.query.id as string;
  if (req.method === 'DELETE') {
    const post = await prisma.post.delete({
      where: { id: postId },
    });

    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route`
    );
  }
};

export default handler;
