function addComment() {
  // 텍스트 박스에서 입력된 값 가져오기
  const textBox = document.querySelector('.textbox');
  const commentText = textBox.value.trim(); // 공백 제거

  // 입력값이 비어 있으면 동작하지 않음
  if (commentText === '') return;

  // 새로운 댓글 요소 생성
  const newComment = document.createElement('div');
  newComment.className = 'comment';
  newComment.textContent = commentText;

  // 댓글 섹션에 추가 (최신 댓글을 위로 추가)
  const commentSection = document.getElementById('comment-section');
  commentSection.prepend(newComment);

  // 텍스트 박스 초기화
  textBox.value = '';
}
