import { BookmarksResponse } from '@/app/types/bookmark';
import axios from 'axios';
import React from 'react'

// const API_BASE_URL = "http://localhost:8080"; // UI(Local)와 API(Local)
// const API_BASE_URL = "http://host.docker.internal:8080"; // UI(Docker)와 API(Local)

const getApiUrl = () => {
  const serverApiUrl = process.env.SERVER_SIDE_API_BASE_URL;
  const clientApiUrl = process.env.NEXT_PUBLIC_CLIENT_SIDE_API_BASE_URL;

  if(typeof window === 'undefined') {
    console.log('(❁´◡`❁) 서버 사이드 실행 - 사용 URL', serverApiUrl);
    return serverApiUrl || clientApiUrl;
  }

  console.log('(❁´◡`❁) 클라이언트 사이드 실행 - 사용 URL', clientApiUrl);
  return clientApiUrl;

}


// 전체 조회 + Page 조회 + 검색어 조회 + (Page 조회 + 검색 조회)
// TypeScript에서 타입이 정해지지 않으 동적타입을 사용하지 매핑되는 타입을 지정한다.
// 타입이 지정되어 이씩 때문에 사용시 개발의 정확성을 높힐 수 있다.(undfinded가 발생하지 않는다.)
export const fetchBookmarks = async(page: number, query?:string):Promise<BookmarksResponse> => {
  let apiUrl = getApiUrl();
  const resp = await axios.get<BookmarksResponse>(`${apiUrl}/api/bookmarks?page=${page}&query=${query}`);
  console.log(resp.data);
  return resp.data;
}

// export async function fetchBookmarkss(page:number, query:string): Promise<BookmarksResponse> {
//   const resp = await fetch(`http://localhost:8080/api/bookmark?page=${page}&query=${query}`);
//   if(!resp.ok) {
//     throw new Error('잘못된 결과');
//   }
//   return resp.json();

// }

// 입력 ${API_BASE_URL}/api/bookmarks , POST, CreateBookmarkRequest.java(JSON) 
// => 예외(Validation 처리 -> HTML -> @ControllerAdvice -> 선택 Excepion ->  JSON message, Status, filed)
export const saveBookmark = async(bookmark : {title:string, url:string}) => {
  let apiUrl = getApiUrl();
  try {
    const resp = await axios.post(`${apiUrl}/api/bookmarks`, bookmark);
    // Promise 객체는 data에 값을 담아서 온다.
    return resp.data;
  } catch (error) {
     // 에러가 발생 했을 경우 처리 베메시
    console.log("Error Saving Bookmark:", error);
    throw new Error("북마크 저장에 실패하였습니다."); // 오류를 throw하여 호출자에게 전달
  }
}