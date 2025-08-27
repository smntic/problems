import { Contest, ProblemStatus } from "@/types";

export const contests: Contest[] = [
  {
    name: "CERC 2021",
    notes: `
      First regional contest practice with Andy. Solved 2 problems in 4 hours.
      Next easiest problem was impossible on Codeforces due to faulty test data.
      Next to that was advanced DP and graph combinatorics. Need to practice harder
      problems (CF 2100+) to improve at these types of contests. Also, North American
      regionals contests are easier than these.
    `,
    problems: [
      { name: "Airline", index: "A", status: ProblemStatus.NeedsReview, notes: "Almost solved this problem by breaking it down into on-path and off-path pairs, then observing that the off-path pairs were multipliers for the on-path pairs. We just didn't notice the additional constraint on the sum of distances. Probably should review the formula for on-path pairs." },
      { name: "Building on the Moon", index: "B", status: ProblemStatus.NotAttempted, notes: "No one solved this in the mirror, so we skipped over it. Also, it was pretty difficult to parse the problem statement." },
      { name: "Cactus cutting", index: "C", status: ProblemStatus.VeryHard, notes: "Spent too long on this problem thinking that there was a simple combinatorial formula. Turned out to be the most difficult problem in the contest." },
      { name: "DJ Darko", index: "D", status: ProblemStatus.NotAttempted, notes: "Reduced to some segment tree logic, but no path to the solution from there. Did not review at all." },
      { name: "Fishing", index: "E", status: ProblemStatus.Solved, notes: "Interesting persistent segment tree approach. Can't sort by height because of query obstruction. Persistent segment tree approach logically follows from there. Should have been able to find this approach in contest, but I was not confident enough. Need to practice more hard problems." },
      { name: "Letters", index: "F", status: ProblemStatus.Solved, notes: "Brute force simulation. Could write four gravity functions or one gravity function and one rotate function." },
      { name: "Lines in a grid", index: "G", status: ProblemStatus.NotAttempted, notes: "Scary geometry problem." },
      { name: "Radar", index: "H", status: ProblemStatus.Solved, notes: "Impossible to solve on Codeforces due to faulty test data. Otherwise, the main difficulty with the problem is parsing the problem statement. Just binary search over two problems independently." },
      { name: "Regional development", index: "I", status: ProblemStatus.NeedsImplementation, notes: "Some kind of flows problem. Might need to use Ford-Fulkerson for this one because of the constraints. Move around M units of net flow to different notes." },
      { name: "Repetitions", index: "J", status: ProblemStatus.NeedsReview, notes: "String problem. Can use the Main-Lorentz divide-and-conquer algorithm combined with segment tree range queries. Should review the Main-Lorentz algorithm." },
      { name: "Single-track railway", index: "K", status: ProblemStatus.NeedsReview, notes: "Problem without queries can we solved with prefix sums. Problem with queries can be solved by using Fenwick tree or segment tree instead (segtree is more optimal because of one less log factor, but both pass). Should review the segtree approach." },
      { name: "Systematic salesman", index: "L", status: ProblemStatus.NeedsImplementation, notes: "Advanced DP approach with memoization. Can recognize the dependencies in the DP states to optimize out part of the transitions." },
    ],
  },

  {
    name: "PacNW 2023",
    notes: `
      Second regional contest practice with Andy. Solved 3 problems in 3.5 hours.
      Could have easily solved one more, maybe two with the additional 1.5 hours.
      We especially need to be able to solve problems < 6.0 difficulty on kattis
      to do well in our division. Andy largely carried on generating solution
      ideas for problem K. I need to focus on contributing my own ideas for next
      contest. Also, we did not have the scoreboard, so it was difficult to know
      which problems to focus on and for how long.
    `,
    problems: [
      { name: "ABC String", index: "A", status: ProblemStatus.NeedsReview, notes: "I did not read the problem statement myself during the contest, but in hindsight it seems simple. Note that a greedy approach of selecting the earliest index based on characters does not work (DFS-style approach). Instead, build the subsequences to maximize the length of existing subsequences (BFS-style approach). Store the frequencies of each existing subsequence's endings (bitmask), then greedily append characters to any valid ending/bitmask with the highest popcount. By appending to subsequences with higher popcounts, you progress those subsequences toward a point where they can 'accept' more characters. Should review more precisely why the greedy strategy works." },
      { name: "Acceptable Seating Arrangements", index: "B", status: ProblemStatus.AttemptLater, notes: "Seemed difficult." },
      { name: "Candy Factory", index: "C", status: ProblemStatus.AttemptLater, notes: "Came up with a connection to a classical problem, but looked too inefficient." },
      { name: "Cramming for Finals", index: "D", status: ProblemStatus.AttemptLater, notes: "Intimidating geometry problem." },
      { name: "Eccentric Excursion", index: "E", status: ProblemStatus.NotAttempted, notes: "Had some ideas with brute force, but nothing concrete." },
      { name: "Item Selection", index: "F", status: ProblemStatus.Solved, notes: "This problem was fine. We struggled with the edge case of not needing to do any operations. Also, parsing the problem statement was challenging." },
      { name: "Matrix Fraud", index: "G", status: ProblemStatus.NotAttempted, notes: "Did not attempt." },
      { name: "On-Call Team", index: "H", status: ProblemStatus.Solved, notes: "Can be easily solved using Hall's Marriage Theorem. The robustness level is at least k if and only if for every set of k services, there are at least k engineers who can work with any of those services. To improve the runtime from O(n2^m) to O(nm + m^3), stop checking for more engineers when you already have k of them (stop iterating over more edges from the services in the current subset)." },
      { name: "Range Editing", index: "I", status: ProblemStatus.Solved, notes: "I had an idea during the contest that was close to the intended solution but was too complicated to implement. There is a simpler (and possibly more correct) method. Let dp[l][r] be the cost of setting the range a[l..r] to their desired values when some prefix of a[l..r] is set to a[l]. Iterate over a middle index m representing where that prefix stops. Then update dp[l][r] with dp[l][m] + dp[m+1][r] and add 1 if and only if a[l] != a[m+1] since the prefix can continue into the next part. Technically, I believe you can ignore the continuation logic and simply ignore those transitions, but this approach is simpler." },
      { name: "Segment Drawing", index: "J", status: ProblemStatus.NotAttempted, notes: "Another intimidating geometry problem." },
      { name: "Sequence Guessing", index: "K", status: ProblemStatus.NeedsImplementation, notes: "Viewing the sequences as binary strings was useful. From there, we (mainly Andy) had some ideas that were very close to the solution. Just needed to consider 'is there a way to change the sequence without affecting most of the indices?'." },
      { name: "Training", index: "L", status: ProblemStatus.Solved, notes: "The simplest problem in terms of implementation, but the greedy approach was non-trivial. However, it was intuitively correct, so we tried it and proved by AC." },
      { name: "Triple Sevens", index: "M", status: ProblemStatus.Solved, notes: "First problem we solved. We need to be able to find these simple problems first and implement them quickly to minimize penalty." },
    ],
  },

  {
    name: "CF Round 1043",
    notes: `
      My 87th Codeforces contest. Second best rank of all time, though it was a div 3.
      Also, my first time participating as specialist since February. I thought the
      problems were a little hard for a div 3, but they were all very classical.
      I performed well mainly because I got lucky with the problemset, but I was also
      focused throughout the contest and always working on something.
    `,
    problems: [
      { name: "Homework", index: "A", status: ProblemStatus.Solved, notes: "Brute force simulation. Hardest part is reading the problem statement." },
      { name: "The Secret Number", index: "B", status: ProblemStatus.Solved, notes: "The problem statement is equivalent to a purely mathematical equality. Use that to find the value x." },
      { name: "The Cunning Seller (easy version)", index: "C1", status: ProblemStatus.Solved, notes: "Every number can be expressed in base N by greedily subtracting the highest possible power of N from the number." },
      { name: "The Cunning Seller (hard version)", index: "C2", status: ProblemStatus.Solved, notes: "Let f(x) be the cost function for 3^x watermelons. Then the cost function satisfies f(x)-3f(x-1) is positive and increasing. Thus, find the construction from C1 and greedily convert deals with the highest values of x to deals of x-1. I got TLE on my first submission because I forgot about the exponential increase in number of deals and the large value of k." },
      { name: "From 1 to Infinity", index: "D", status: ProblemStatus.NeedsReview, notes: "Binary search to find which number the string ends with, then count the digit sum of numbers before that and the prefix of the last number that is still within the string. There is a formula to find the sum of all digits of numbers between 1 and n. I should derive the formula myself and understand whether there are better ways to approach the problem." },
      { name: "Arthmetics Competition", index: "E", status: ProblemStatus.Solved, notes: "Classic binary search problem. It is clearly optimal to always take z_i cards. Define a function f(k) to be the maximum possible sum when taking k cards from pile a. The function is concave (removing low cards from a while adding high cards from b), so binary search for the maximum value. Need to check adjacent values as well depending on binary search approach." },
      { name: "Rada and the Chamomile Valley", index: "F", status: ProblemStatus.Solved, notes: "Classic graph problem. The \"lanes that they will definitely\" use are the bridges that are on any path from 1 to n. Find the bridges, then take any path's edges and find the intersection of the two sets. Then, use multi-source BFS to find the answers for all the nodes. The queries can then be solved by reporting those answers." },
      { name: "Famous Choreographer", index: "G", status: ProblemStatus.Solved, notes: "Solved after the contest. Main issue was reading the problem statement, but the samples and explanations were key. Observe that the original matrix will be placed at one of the corners of the new matrix. Also, adding rows to the bottom and right sides of the matrix is equivalent to removing rows from the top and left sides. Thus, for each of the four rotations of the matrix, find the minimum answer over all possible ways to remove those rows. Note that checking 180 degree equivalence is equivalent to checking if the string formed by reading the submatrix in row order is a palindrome. Can use hashing to check that. Store the hashes for the forward and reverse directions of the string formed by the submatrix, then use those to find the answer. Also need to use a strong hashing technique to avoid hacks during the open hacking period." },
    ],
  },

  {
    name: "CF Round 1044",
    notes: `
      I participated virtually in this contest. Decent master-level performance. If I
      could continue having similar performances in rated contests, I would expect to
      reach master in a few contests. However, I got lucky with the problemset being relatively
      intuitive to me, and the difficulty curve worked in my favour. I still need to
      work on solving harder problems like problem E, and my slow solving of D indicates
      that I should practice with more advanced DP problems.
    `,
    problems: [
      { name: "Redstone", index: "A", status: ProblemStatus.Solved, notes: "This is intuitive because I used to work in robotics. If the input gear is the same as the output gear, then your ratio is 1:1. You can also prove this mathematically with fractions. If I submit this in the actual contest, I would have been the 6th person to solve the problem overall... which is maybe good proof that I don't need to practice explicitly for speed, the speed can come from practicing other things." },
      { name: "Villagers", index: "B", status: ProblemStatus.Solved, notes: "It is optimal to pair the largest value with the second largest value and so on. Once you've done this, you can connect the components without any additional cost because every component has a villager with g[i] = 0." },
      { name: "The Nether", index: "C", status: ProblemStatus.Solved, notes: "Consider applying the operation for all x in [1, N] and S = [1, N]. This gives the longest path starting at each node. Find the start node of a longest path and find the next node for some continuation of that path. The node must be connected to the previous node and have a longest path length of one less. You can query '? x 2 x y' to check if there is an edge from x to y. Process the nodes in decreasing order of maximum path length to find the path in at most n more operations." },
      { name: "Chicken Jockey", index: "D", status: ProblemStatus.Solved, notes: "It is easier to process the indices from left to right. Let dp[i] be the cost of killing the mobs at indices 1..i. It is optimal to damage the mobs going down the stack to maximize fall damage. Thus, the optimal solution forms some partitioning of the mobs into mobs that are killed before taking any fall damage, mobs that immediately proceed those and take maximum fall damage and mobs that proceed the second type of mobs and take 1 fall damage each. It is always optimal to let the last mob take fall damage, so, to compute dp[i], consider the other two cases. If the i-th mob will take 1 fall damage, then dp[i] = dp[i-1] + (h[i]-1). Otherwise, the i-th mob will take maximum fall damage (immediately proceeding a mob that was killed before taking any fall damage) and dp[i] = dp[i-2] + h[i-1] + max(0, h[i]-(i-1)) (assuming 1-based indexing). dp[i] is the minimum of the those. There is also a way to process them in decreasing order of index, but probably requires a more complicated DP state or uses a complicated expression and min value on suffix. When you find a complicated DP approach, consider approaching the problem literally in another direction." },
      { name: "I Yearned For The Mines", index: "E", status: ProblemStatus.Solved, notes: "Note that you can 'solve' a path graph by performing operations of type 1 from one end to the other. If you could decompose the graph into path components using n/4 operations, then you can solve the rest of the problem in n operations. The n/4 requirement is suspicious. Maybe there is a way to operate on the nodes in groups of at least 4? In this case, work with a rooted tree and observe patterns. Process the nodes using DFS and colour the nodes. If a node has two green children, colour it yellow. If a node has more than two green children or any yellow children, colour it black. Otherwise, colour it green. Then perform operations of type 2 on the black nodes. It is easy to see that all the black nodes 'fix' at least 3 other nodes." },
      { name: "Flint and Steel", index: "F", status: ProblemStatus.AttemptLater, notes: "Should try this one later, since I thought I had a good approach." },
    ],
  },

  {
    name: "CF Round 1045",
    notes: `
      My 88th Codeforces Contest. Alright ranking, set to gain a small amount of rating,
      but definitely not my best performance. I was interrupted a couple of times in the
      contest. Once time, I had to go outside and grab something. When I came back, I
      realized I was more focused than usual on the problems. Maybe the stress from
      the timer decreasing in value was helpful, or a small amount of physical activity
      outside was the main reason. Either way, I should consider performing similar
      activities before contests in the future (e.g. going for a run, as SecondThread
      has mentioned doing before). This was a fairly typical "SpeedForces" round, where
      solving the first few problems fast was the difference between a master-level performance
      and a pupil/specialist-level performance. I don't plan to specifically prepare
      for these types of contests, and instead expect the average contest to involve
      more thinking and techniques than speed.
    `,
    problems: [
      { name: "Painting With Two Colors", index: "A", status: ProblemStatus.Solved, notes: "Typical codeforces casework problem. Be careful to read the 'If a cell is painted both...' and find the solution through constructing examples." },
      { name: "Add 0 or K", index: "B", status: ProblemStatus.Solved, notes: "Worked with k=2 and k=3 cases to find a general approach of setting all values to 0 modulo some value close to k. It turns out that you can just use k+1 as that value. Since k is congruent to -1 modulo k+1, you can add k a[i]%(k+1) times to a[i] to make a[i]%(k+1) = 0." },
      { name: "Even Larger", index: "C", status: ProblemStatus.Solved, notes: "I recently saw a problem like this where the solution was to only consider subarrays of size 2 and 3. This is also a standard approach is many other problems such as performing operations to remove all palindromes from a string (the \"middle\" of a palindrome is always a palindrome of length 2 or 3). The order in which the values should be processed is intuitive, but this solution leads to a lot of casework and a lot of code in general. Instead, you can notice that the 'worst case' for the sum is when you have two odd-indexed values and one even-indexed value. You can then greedily choose the largest possible value for each of the odd-indexed values by observing these adjacent cases (at most 2 of them). It works to greedily process these values from left to right and increase because any increase that you do not take earlier would otherwise be taken 2 indices later which could only 'worsen the situation', so to speak." },
      { name: "Sliding Tree", index: "D", status: ProblemStatus.Solved, notes: "Consider some property of the tree that changes between the initial tree and the final path graph. In this case, the diameter of the tree is an obvious choice. In turns out that you can increase the diameter of the tree by 1 with every operation and that every operation that increases the diameter by 1 can be used in the optimal sequence. Thus, find any such operation. To do this, compute any diameter of the tree. There is some 'branch' off of the diameter if and only if the tree is not a path graph already. Find such a branch by traversing the diameter. If there is no such branch, then the tree is a path graph." },
      { name: "Power Boxes", index: "E", status: ProblemStatus.Solved, notes: "If we know the number of bounces for indices i+1 and i+2, then we can also find the value at index i by throwing a ball there. Call the number of bounces at index i dp[i]. Then, process the indices in decreasing order. If dp[i+1] != dp[i+2], then find dp[i] by throwing a ball at i. Otherwise, we know that dp[i] = dp[{i+1, i+2}]+1 and mark this index to compute later. If we marked index i+1, then swap i and i+1 so now dp[i+1] != dp[i+2] and we can query i to find a[i] (previous was a[i+1], which we marked). In case the a[1] was marked, swap 1 with 2 and query at 2. This works because there cannot be three consecutive equivalent values of dp[i], so there can only be n/2 marked indices. Thus we use about n+n/2=3n/2 queries." },
      { name: "Permutation Oddness", index: "F", status: ProblemStatus.NotAttempted, notes: "Did not attempt." },
    ],
  }
];

