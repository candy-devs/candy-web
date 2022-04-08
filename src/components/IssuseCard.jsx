import "./IssuseCard.scss";

export default function IssuseCard({img, name}) {
  return (
    <div class="issuse-card">
      <img class="issuse-card-img" src={img} alt="tag"></img>
      <p class="issuse-card-name">{name}</p>
    </div>
  )
}