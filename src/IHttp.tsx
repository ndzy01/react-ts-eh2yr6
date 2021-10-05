import React from 'react';

import { useReq } from './utils/http';

const IHttp = () => {
  const { run } = useReq();
  return <div>请求</div>;
};

export default IHttp;
