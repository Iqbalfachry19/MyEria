import NextAuth from 'next-auth';
import { authOptions } from '../../../db/auth';

export default NextAuth(authOptions);
