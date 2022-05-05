# Building Startup Systems 

**Milestone 3: Build a working app**

Songyu Du, Shengnan Han, Yimeng Sun

## Links

github repository: https://github.com/ysunaw/boba_er

web app link: https://bobaer-4cf63.web.app/ 

## Part 1 Document your data model & API

We used firestore and defined two set of collections: bobaPosts and bobaReviews. 

### bobaPosts

```
// bobaPosts data model
// each document represents an entry in the journal added by the user 
{
	bobaStore:"boba store", 	// boba shop name
  drinkName:"boba drink",		// boba drink name
  sugarLevel:"25", 			// percentage of sugar in the drink
	iceLevel:"50", 			// percentage of ice in the drink
  topping:"taro ball"			// topping for the drink
  author: { 
  	name: "John Doe", 		// display name for the person submitting
  	id: "123" 			// user id for the person submitting 
	},
}
```

Screenshot of bobaPosts collection

![Screen Shot 2022-05-03 at 12.52.17 AM](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 12.52.17 AM.png)

### bobaReviews

```
// bobaReviews data model
// each document represents a review the user made
{
  drink:"boba drink", 			// boba drink name
  rating:"5",				// a score from 0 - 5 given by the user
  comment:"Great!"			// comment made by the user
  author: { 
  	name: "John Doe", 		// display name for the person submitting
  	id: "123" 			// user id for the person submitting 
	},
}
```

Screenshot of bobaReviews collection

![Screen Shot 2022-05-03 at 12.53.55 AM](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 12.53.55 AM.png)

## Part 2 Feature implementation

### Feature 1 Create journal entry

The user is able to add a boba entry to their journal after submission of the entry and writing review of the boba, the user will be prompted back to the journal page, where they could see a list of all the past boba entries they submitted. 

git commit: https://github.com/ysunaw/boba_er/commit/f5127ffa6096b18deab9a8c26cab63aeb038a7d6

![Add entry page](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.17.03 AM.png)

Add entry page

![Screen Shot 2022-05-03 at 3.18.36 AM](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.18.36 AM.png)

Journal page

### Feature 2 Create reviews

The user is able to add a review to the boba tea they just submitted entry for. The user could give a rating of 0-5 and leave a comment to the drink. After submission, they could use the 'review' tab to view all the reviews on the website.

git commit: https://github.com/ysunaw/boba_er/commit/6e11918f7f89b61ba6c565b99f46525667e33dd2

![](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.22.22 AM.png)

Add review page

![Screen Shot 2022-05-03 at 3.26.45 AM](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.26.45 AM.png)

Review page

### Feature 3 Filter journal with date picker

In journal page, the user is able to use a calendar view the dates when they added an entry. They could also pick a specific date using the datepicker to view the boba entries from the picked date. 

git commit: https://github.com/ysunaw/boba_er/commit/a648f28a5e249751a9b3968ba20e6a0106384d07

![Screen Shot 2022-05-03 at 3.21.19 AM](/Users/ymm/Desktop/Screen Shot 2022-05-03 at 3.21.19 AM.png)

Journal page with selected date of may 3rd

## Part 3

### Reviewing traffic to your web app

**How many requests did you receive?**

We received a totaly of 64 requests. 

![Screen Shot 2022-05-03 at 3.54.41 AM](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.54.41 AM.png)

**How do you know it was a human and not a bot?**

In each request, we could see the information related to the request and we could see the user ID and their browser settings. 

### Measuring frontend performance

![Screen Shot 2022-05-03 at 3.36.03 PM](/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.36.03 PM.png)

**Whats the maximum CPU usage of your page?**

0.2%

**Whats the maximum memory that it uses?**

14.2MB

**How fast did your page load?**

Our page was loaded in 5ms. 

<img src="/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.48.47 AM.png" alt="Screen Shot 2022-05-03 at 3.48.47 AM" style="zoom:50%;" />

**How much data was transferred?**
It depends on how reviews and jounral was uploaded by the user. We do understand that as users input an increasing number of reviews, our current algorithm will return whatever they have inputed in without doing any filtering, which could slow day app performance. In the future, we may only load 20 reviews at a time so that the app can reach a consistent performance over the time. 


### Measuring backend performance

**How many API calls did you receive and how long does it take to respond?**
since we used react, technically, we do not have backend. According to Chrome performance function, it took roughly 550.0 ms to load home page, 733.3 ms to load journal page, 750.4 ms to load review page, 650.0 ms to load user page.


**How long did your function take to run?**
We are unable to test it out due to react setup.


**Did you see any errors?** 

No. 

### For traffic headed to your database

**How many reads did you make to your Firestore (or other) database?**

We made a total of 34 reads to our database. 

<img src="/Users/ymm/Library/Application Support/typora-user-images/Screen Shot 2022-05-03 at 3.44.19 AM.png" alt="Screen Shot 2022-05-03 at 3.44.19 AM" style="zoom:50%;" />

**How long did it take to do a read? (*Include latency metrics if available)** 

