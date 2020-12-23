/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible the root page
 * ================================================
 */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ERoute } from '@system/routes';

const Root = (): null => {
  const router = useRouter();
  useEffect(() => {
    router.replace(ERoute.home);
  }, []);
  return null;
};

export default Root;