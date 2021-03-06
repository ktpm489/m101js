// in your terminal run the following
// $ mongo < hw5-1.js 
use blog;
db.posts.aggregate([
    /* unwind by comments */
    {$unwind:"$comments"},
    /* group by author counting comments */
    {$group: {_id:"$comments.author", count:{$sum:1}}},
     /* sort by count */
    {$sort:{count:-1}},{$limit:5},
    {$project : {_id:0, 'author':'$_id', 'count':1}}
])