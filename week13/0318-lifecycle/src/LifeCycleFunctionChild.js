import React, { useEffect } from 'react';

export default function LifeCycleFunctionChild({ number }) {
  // mount 시점에 실행
  useEffect(() => {
    console.log('컴포넌트 마운트!!');
  }, []);

  // unmount 시점에 실행
  useEffect(() => {
    console.log('컴포넌트 언마운트 코드 전');
    return () => {
      console.log('컴포넌트 언마운트!!');
    };
  }, []);

  // update 시점에 실행 & mount 시점에도 실행
  useEffect(() => {
    console.log('number', number);
  }, [number]);
  return <div>현재 Number값은 {number}입니다!</div>;
}
