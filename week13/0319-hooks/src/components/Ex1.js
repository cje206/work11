import { useForm } from 'react-hook-form';

export default function Ex1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('username', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register('age', {
            min: {
              value: 0,
              message: '0 이상의 숫자만 입력 가능합니다',
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
