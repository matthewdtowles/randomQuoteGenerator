var quoteSource = [
	"Give a man a fish and you feed him for a day. Don't teach a man to fish and you feed yourself. He's a grown man. Fishing's not that hard.",
	"I change my locks every 16 days. That key's been useless since the 2nd Tuesday I gave it to you.",
	"Creativity is for people with glasses who like to lie.",
	"I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
	"I prefer quality over flash - that's why I refuse to write my signature in cursive.",
	"Live your life how you want, but don’t confuse drama with happiness.",
	"I don’t drink alcohol from that portion of the color system.",
	"I’d like to introduce you to my son. John, middle name redacted, Swanson.",
	"Veganism is the sad result of a morally corrupt mind. Reconsider your life.",
	"Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing.",
	"Computers are mostly pointless, but that Yelp thing gave me a great idea on how to criticize people in places.",
	"I believe luck is a concept invented by the weak to explain their failures.",
	"History began July 4th, 1776. Anything before that was a mistake.",
	"Great job, everyone. The reception will be held in each of our individual houses, alone.",
	"There's only one thing I hate more than lying: skim milk, which is water that's lying about being milk.",
	"There must be a mistake. You've accidentally given me the food that my food eats.",
	"Keep your tears in your eyes where they belong.",
	"Crying is acceptable at funerals and the Grand Canyon.",
	"I've cried twice in my life. Once when I was seven and hit by a school bus. Then again when I heard that Li'l Sebastian had passed.",
	"Never half-ass two things. Whole-ass one thing.",
	"When people get a little too get chummy with me, I like to call them by the wrong name to let them know I don't really care about them.",
	"I don't know the amount of money I have. I only know how many pounds of money I have."
];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}

$("#new-quote").click(function(){
  var randomNum = RandomFunction(0, quoteSource.length - 1);
  var randomQuote;
  document.getElementById("text").innerHTML = quoteSource[randomNum];
  randomQuote = document.getElementById("text").innerHTML;
  $("#tweet-quote").attr("href", "http://twitter.com/home/?status=" + randomQuote);
});
