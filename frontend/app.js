async function submitVote() {
  const value = document.getElementById("voteValue").value;

  const res = await fetch("http://localhost:3000/vote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: "0xUser",
      value: value
    })
  });

  const data = await res.json();
  alert(data.message);
}
