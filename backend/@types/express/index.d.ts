declare namespace Express {
  export interface Request {
    userId?: string;
    userType?: 'PARENT' | 'CHILD';
  }
}
