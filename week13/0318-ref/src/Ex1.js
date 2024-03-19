import { Component } from 'react';

export default class Ex1 extends Component {
  state = {
    inputWriter: '',
    inputTitle: '',
    comment: [
      {
        writer: '민수',
        title: '안뇽',
      },
      {
        writer: '지민',
        title: '하이하이',
      },
      {
        writer: '희수',
        title: '멋쟁이',
      },
    ],
  };

  render() {
    const { inputWriter, inputTitle, comment } = this.state;
    const addComment = () => {
      if (!this.writerRef.value.trim()) {
        this.writerRef.focus();
        return;
      } else if (!this.titleRef.value.trim()) {
        this.titleRef.focus();
        return;
      }
      let newComment = {
        writer: inputWriter,
        title: inputTitle,
      };

      // state 추가
      this.setState({
        comment: [...comment, newComment],
        inputWriter: '',
        inputTitle: '',
      });
    };
    return (
      <div>
        <form>
          <label htmlFor="writer">작성자:</label>
          <input
            id="writer"
            type="text"
            name="writer"
            value={inputWriter}
            ref={(ref) => {
              this.writerRef = ref;
            }}
            onChange={(e) => this.setState({ inputWriter: e.target.value })}
          />
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={inputTitle}
            ref={(ref) => {
              this.titleRef = ref;
            }}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={addComment}>
            작성
          </button>
        </form>

        <table border={1} style={{ marginTop: '30px', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((value, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
