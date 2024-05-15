import placeholderImg from "../src/assets/movieCover.png";

export const Film = () => {
  return (
    <div class="flex flex-row items-center justify-between">
      <div>
        <img src={placeholderImg} alt="" />
      </div>
      <div>
        <div>GENRE</div>
        <div>
          <div>Day</div>
          <div>Date</div>
          <div>Time</div>
        </div>
        <h3>Title</h3>
        <div>1h 50min</div>
        <div>Country</div>
        <p>
          Description description description description description
          description description description description description
          description description description description
        </p>
        <div>Production Company</div>
      </div>
    </div>
  );
};
