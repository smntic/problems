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
      { name: "Single-track railway", index: "K", status: ProblemStatus.Solved, notes: "Problem without queries can we solved with prefix sums. Problem with queries can be solved by using Fenwick tree or segment tree instead (segtree is more optimal because of one less log factor, but both pass)." },
      { name: "Systematic salesman", index: "L", status: ProblemStatus.NeedsImplementation, notes: "Advanced DP approach with memoization. Can recognize the dependencies in the DP states to optimize out part of the transitions." },
    ],
  },

  {
    name: "PacNW 2022",
    notes: `
      Our first regionals practice contest with all three of us (Finnick, Andy and myself).
      We solved four problems (A, C, F, J), one of which was non-trivial. We need to work
      on figuring out which problems we should focus on (whether that be through the scoreboard
      or by intuition), since, in this contest, we spent a lot of time on problems
      that not very many people solved (e.g., I, which went unsolved in the official contest).
      We were close to tieing with a previous SFU team who solved one more problem (D) than us.
    `,
    problems: [
      { name: "Three Dice", index: "A", status: ProblemStatus.NeedsImplementation, notes: "There are only 18/((6!)^3*3) different assignments, so you can brute force them all while ensuring that all the constraints are still satisfied." },
      { name: "Alchemy", index: "B", status: ProblemStatus.NeedsImplementation, notes: "A greedy approach does not work. Instead, you can use a very simple DP approach." },
      { name: "Champernowne Count", index: "C", status: ProblemStatus.Solved, notes: "k|n <=> n%k == 0. Maintain the value modulo k. Appending another number to the current number is equivalent to multiplying by ten for the length of the number and then adding the number." },
      { name: "Triangle Containment", index: "D", status: ProblemStatus.Solved, notes: "Consider L=(0,0), R=(x,0) and P=the query point. A point being in the interior of the triangle is equivalent to the point being CW to LP and CCW to RP. Those sets can overlap, though. Iterate over the points in CW order relative to L. As you process them, 'deactivate' them by setting their values to 0. This covers the first restriction of the point must be CW to LP. For the other restriction, you can sort the points radially relative to R instead, and binary search to find the first point CCW to RP. Then, take the range query of the remaining points. Any 'deactivated' points have their values set to 0 so this covers both requirements. You can store the values in a segment tree and use range queries." },
      { name: "Color Tubes", index: "E", status: ProblemStatus.Solved, notes: "Clear the rightmost tube by moving all balls into empty spaces on the left. Then, fill the empty tube with one colour. You must find a colour that occurs at the top of another tube and the two others are not both at the bottom of some tubes. It is guaranteed that there exists one, since there can only be floor(|remaining tubes|/2) invalid colours. Move the top instances, then the middle instances, then the bottom instances. If there are other colours in the way, move them to an empty spot first. It is guaranteed that there are enough empty spots if you process the balls in this order. Then, repeat this process excluding the rightmost tube." },
      { name: "Food Processor", index: "F", status: ProblemStatus.Solved, notes: "It is always optimal to use the blade with the lowest half-life that we can use. Thus, sort the blades by their maximum size and process the blades in decreasing order of max size, using the best usable blade to access other blades. The time it takes to reduce the sizes can be computed using basic high school pre-calculus." },
      { name: "Digits of Unity", index: "G", status: ProblemStatus.AttemptLater, notes: "You can solve this problem using a classical inclusion-exclusion approach." },
      { name: "Branch Manager", index: "H", status: ProblemStatus.AttemptLater, notes: "No one observed this problem... during contest or after." },
      { name: "Counting Satellites", index: "I", status: ProblemStatus.NotAttempted },
      { name: "Sun and Moon", index: "J", status: ProblemStatus.NeedsReview, notes: "The constraints allow you to iterate over all the possible times and check whether each are valid. You can also use chinese remainder theorem. Should review the CRT approach." },
      { name: "Advertising ICPC", index: "K", status: ProblemStatus.NeedsImplementation, notes: "Given the small constraints, you can store the previous row of values in your DP state. This is all you need to know where any of the important ICPC-able locations are." },
      { name: "Exponent Exchange", index: "L", status: ProblemStatus.NotAttempted },
      { name: "Lone Knight", index: "M", status: ProblemStatus.NotAttempted },
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
      { name: "ABC String", index: "A", status: ProblemStatus.Solved, notes: "I did not read the problem statement myself during the contest, but in hindsight it seems simple. Note that a greedy approach of selecting the earliest index based on characters does not work (DFS-style approach). Instead, build the subsequences to maximize the length of existing subsequences (BFS-style approach). Store the frequencies of each existing subsequence's endings (bitmask), then greedily append characters to any valid ending/bitmask with the highest popcount. By appending to subsequences with higher popcounts, you progress those subsequences toward a point where they can 'accept' more characters." },
      { name: "Acceptable Seating Arrangements", index: "B", status: ProblemStatus.Solved, notes: "Consider moving the values to their correct positions in increasing order of value (mostly a leap of intuition). This approach means that all values intended to be to the left of the value's new position have already been placed correctly. Consider fixing the value located at position x in the target position y. If we can directly swap the values at x and y then do so. Otherwise, we encounter a problem that the values on the right of x may be smaller than the value at y. We may consider, instead, 'inserting' the value at y into the correct position in x's row. We can perform this insertion operation by swapping values from right to left in x's row with the value at y for all and only the values which are less than y. This places y in the current position and shifts down the other values to the left by one. It also swaps the value at x to y in the end." },
      { name: "Candy Factory", index: "C", status: ProblemStatus.Solved, notes: "Similar to the classical problem of removing stones in pairs from stacks such that you can remove all the stones. Clearly, you need at least max_i a[i] bags, and at least ceil((sum_i a[i])/k) bags. This also happens to be the minimum number of bags by the same (intuitive) logic as the aforementioned classical problem." },
      { name: "Cramming for Finals", index: "D", status: ProblemStatus.Solved, notes: "Seems scary at first, but the idea is very simple. Flip the problem around. Instead of finding the minimum number of positions within a circle, find the minimum number of circles overlapping a position. Each circle affects a range of positions for each row. Thus, process them using sweep line on the start and end column positions for each row and use delta encoding to keep track of how many circles overlap each position. The best position must occur either at the start of the row, or at one of the event positions. Make sure to check if the event position is also the center of a circle (if this is the case, it effectively 'continues' the circle, so this does not cause issues with finding the minimum value)." },
      { name: "Eccentric Excursion", index: "E", status: ProblemStatus.NotAttempted, notes: "Had some ideas with brute force, but nothing concrete." },
      { name: "Item Selection", index: "F", status: ProblemStatus.Solved, notes: "This problem was fine. We struggled with the edge case of not needing to do any operations. Also, parsing the problem statement was challenging." },
      { name: "Matrix Fraud", index: "G", status: ProblemStatus.NotAttempted, notes: "Did not attempt." },
      { name: "On-Call Team", index: "H", status: ProblemStatus.Solved, notes: "Can be easily solved using Hall's Marriage Theorem. The robustness level is at least k if and only if for every set of k services, there are at least k engineers who can work with any of those services. To improve the runtime from O(n2^m) to O(nm + m^3), stop checking for more engineers when you already have k of them (stop iterating over more edges from the services in the current subset)." },
      { name: "Range Editing", index: "I", status: ProblemStatus.Solved, notes: "I had an idea during the contest that was close to the intended solution but was too complicated to implement. There is a simpler (and possibly more correct) method. Let dp[l][r] be the cost of setting the range a[l..r] to their desired values when some prefix of a[l..r] is set to a[l]. Iterate over a middle index m representing where that prefix stops. Then update dp[l][r] with dp[l][m] + dp[m+1][r] and add 1 if and only if a[l] != a[m+1] since the prefix can continue into the next part. Technically, I believe you can ignore the continuation logic and simply ignore those transitions, but this approach is simpler." },
      { name: "Segment Drawing", index: "J", status: ProblemStatus.NotAttempted, notes: "Another intimidating geometry problem." },
      { name: "Sequence Guessing", index: "K", status: ProblemStatus.Solved, notes: "It may be helpful to view the sequence instead as a binary string where an index is 1 if that value is included in the sequence and is 0 otherwise. In the binary string, the first and last values must be ones and there cannot be any two adjacent zeros. Note that we are required to print the index of each correctly-guessed value, which limits our options. Ideally, there would be a tactic such that the indexes are always fixed and don't provide any useful information about the sequence. One such way is to consider the values in triplets. Set the first value to 1 and do not fix the other two values yet. We can select one of the latter two values to be a 0 and the other to be a 1 later. Notice how this fixes the indexing, so it is impossible to gain any information from the indexing, and preserves the property that there cannot be two adjacent zeros. Among the latter two values, set whichever one was first guessed to be a 0, and set the other to a 1. Repeat this pattern of threes over the entire binary string (first three, second three, etc.). Since there are 33333 triplets and we can force at least one miss per triplet, the interactor will always miss at least 33333 times." },
      { name: "Training", index: "L", status: ProblemStatus.Solved, notes: "The simplest problem in terms of implementation, but the greedy approach was non-trivial. However, it was intuitively correct, so we tried it and proved by AC." },
      { name: "Triple Sevens", index: "M", status: ProblemStatus.Solved, notes: "First problem we solved. We need to be able to find these simple problems first and implement them quickly to minimize penalty." },
    ],
  },

  {
    name: "ECNA 2022",
    notes: `
      Our second full-team regional practice contets. We solved five problems (C, D, F, G, I),
      and probably could have solved A, B, J and K given more time (we had 3 hours). This would
      have placed us in the top 20 teams in the real contest. While only a hypothetical placement,
      this is still a strong result already. We briefly checked the scoreboard which helped us
      know which problems to focus on.
    `,
    problems: [
      { name: "A-Mazing Puzzle", index: "A", status: ProblemStatus.Solved, notes: "This is obviously BFS-able. Since rotations are free, you just need to know the offset between the two robots' rotations. Then, you can visit the states and iterate through the possible rotations (4). This gives a O((rc)^2) algorithm" },
      { name: "A Musical Question", index: "B", status: ProblemStatus.Solved, notes: "Note the time limit is... 11 seconds?! This is obviously the classical knapsack-DP problem. You can use states of (idx, cd_1_sum, cd_2_sum) and dp over those states. That gives an O(nc^2) algorithm. nc^2 itself is 10^9, but (10^9 ops)/(2*10^8 ops/second) = 5 seconds... so you can just use that. Also, you can optimize this code using bitsets: the transitions then become left-shifts and bitwise ors." },
      { name: "Cribbage On Steroids", index: "C", status: ProblemStatus.Solved, notes: "You can solve each part of the problem independently. Pairs are obvious. Sum-to-15 can be solved using DP (state: (idx, sum)). Runs can be solved by finding the counts of each card value and adding the product of the non-zero counts." },
      { name: "Determining Nucleotide Assortments", index: "D", status: ProblemStatus.Solved, notes: "You can solve this using prefix sums." },
      { name: "Hilbert’s Hedge Maze", index: "E", status: ProblemStatus.NotAttempted },
      { name: "It’s About Time", index: "F", status: ProblemStatus.AttemptLater, notes: "Reading comprehension problem. You can just iterate over n1, n2 and n3 and find which best approximates the tropical years." },
      { name: "Pea Pattern", index: "G", status: ProblemStatus.Solved, notes: "You can iterate through the numbers and manually calculate the next string by finding the counts of each present digit. The strings are intuitively short and there cannot be more than 100 numbers in a sequence before finding a repetition." },
      { name: "Picking Up Steam", index: "H", status: ProblemStatus.NotAttempted },
      { name: "Road To Savings", index: "I", status: ProblemStatus.Solved, notes: "An edge is on some shortest path if the minimum length of a path that goes from the start to the edge and then to the end is the same length as the shortest path between the start and the end. We can use the Floyd-Warshall algorithm to find solve the all-pairs shortest path problem and use that information to determine which edges are on a shortest path." },
      { name: "Simple Solitaire", index: "J", status: ProblemStatus.AttemptLater },
      { name: "Two Charts Become One", index: "K", status: ProblemStatus.AttemptLater },
      { name: "Which Warehouse?", index: "L", status: ProblemStatus.NotAttempted },
    ],
  },

  {
    name: "CCC 2023",
    notes: `
      My first CCC contest. I wrote the senior division for this contest.
      I took this contest about 4 months after starting in
      competitive programming. I solved the first problem fine, but was unable
      to come up with a more efficient approach to the second problem. I also
      found a couple subtask points on S3.
    `,
    problems: [
      { name: "Deliv-e-droid", index: "J1", status: ProblemStatus.Solved, notes: "Typical first problem in the junior contest. Read the input, do the thing, output the answer." },
      { name: "Chili Peppers", index: "J2", status: ProblemStatus.Solved, notes: "Copy-paste the values into a map. Then process the strings and add their values." },
      { name: "Special Event", index: "J3", status: ProblemStatus.Solved, notes: "Read the input, do the thing, output the answer..." },
      { name: "CCC Word Hunt", index: "J5", status: ProblemStatus.Solved, notes: "You can either brute force all possible word positions, or use DP. If you choose DP, be very careful with the state and transitions. Maybe use something like dp(r, c, idx, turned, dir)." },
      { name: "Trianglane", index: "S1", status: ProblemStatus.Solved, notes: "I find it easier to consider adding all the tape and then removing the overlapping tape. Add 3*<the number of ones>, then subtract 2*(<the number of horizontally-adjacent ones> + <the number of vertically-adjacent ones at odd-indexed positions (1-based)>)." },
      { name: "Symmetric Mountains", index: "S2", status: ProblemStatus.Solved, notes: "There are O(n) center positions and you can expand out of each of them. To make the implementation simpler, you can add zeros between every value. Then, iterate over all the center positions and compute the sum of the differences at the left and right indices as you expand the range." },
      { name: "Palindromic Poster", index: "S3", status: ProblemStatus.AttemptLater, notes: "So much casework. Is there a way to simplify the problem?" },
      { name: "Minimum Cost Roads", index: "S4", status: ProblemStatus.AttemptLater, notes: "Use Kruskal's algorithm and add edges iff cur_dist[x][y] > prev_dist[x][y] and edge.l == prev_dist[x][y]. This doesn't work for some reason. Could either be my approach or my implementation." },
      { name: "The Filter", index: "S5", status: ProblemStatus.AttemptLater, notes: "First subtask is fairly easy. The rest seem much harder. Note that 1/12 is in the set, despite being unable to be represented as p/q with gcd(p, q) = 1 and q as a power of 3." },
    ],
  },

  {
    name: "CCC 2024",
    notes: `
      My second and last official CCC contest. I started by reading S4
      and S5 and writing down any initial observations/ideas. Then, I wanted
      to solve S1, S2 and S3. I got through S1 and S2 fine, but when I got to S3
      I thought I solved a similar problem shortly before that contest (~1 week before),
      so I implemented the same approach I used for that problem. Turned out that
      I never solved that problem either. The stress of the contest got to me and
      I ended with 34/75 points after securing a couple additional subtask points on S5.
    `,
    problems: [
      { name: "Conveyor Belt Sushi", index: "J1", status: ProblemStatus.Solved, notes: "Read the input, do the thing, output the answer." },
      { name: "Dusa And The Yobis", index: "J2", status: ProblemStatus.Solved, notes: "Read input using a while loop. E.g. while (cin >> v) { ... }." },
      { name: "Bronze Count", index: "J3", status: ProblemStatus.Solved, notes: "Find the third largest value, then count the number of times it occurs. You can sort the array and iterate to find those." },
      { name: "Troublesome Keys", index: "J4", status: ProblemStatus.Solved, notes: "Think about what you can find first. Let the set of characters in s be ss and the set of characters in t be st. We know that ss != st. Since the silly key was used at least once, there is exactly one character in st that is not in ss. We cannot know anything about the contrary at this point. However, we can find the first index i such that s[i] != t[i] and determine whether this was a silly key or quiet key press based on t[i]. Then, we can process the rest of the string and find the rest of the information." },
      { name: "Harvest Waterloo", index: "J5", status: ProblemStatus.Solved, notes: "Damn, that was boring. Just flood fill." },
      { name: "Hat Circle", index: "S1", status: ProblemStatus.Solved, notes: "Took me 5 minutes to debug for some reason in the actual contest. This time, it took me 30 seconds. Just iterate over all indices i in [1, N] and check with j = (i+N/2)%N." },
      { name: "Heavy-Light Composition", index: "S2", status: ProblemStatus.Solved, notes: "Be careful with the input format. Otherwise, just compute the counts and iterate through the string." },
      { name: "Swipe", index: "S3", status: ProblemStatus.Solved, notes: "Observe that if you take an index i to the right, you cannot use elements before i on the right. Same with swipes to the left. Thus, try to use every element in a as much as possible. You can use two pointers: j pointer for current element in a and normal for loop for index i in b. Then, move the j pointer if and only if a[j] != b[i]. We can also compute the operations using j and i. Be careful with output since it wants 0-based indexing. This problem effectively killed me before, but now I can easily solve it." },
      { name: "Painting Roads", index: "S4", status: ProblemStatus.Solved, notes: "Run DFS on the graph (make sure you visit each component). Consider all the nodes adjacent to the current node. If any are unvisited, visit them immediately. Toggle the colour for each call to DFS (same colour for all outgoing edges of the current node). If you already visited one of the adjacent nodes, that node must be a parent of this node in the DFS tree (i.e. it must be somewhere in the call stack). This means that there is a path from the current node to that node by taking each node's parent (i.e. popping from the call stack). Since we toggle the colour in each DFS call, that path has alternating edge colours." },
      { name: "Chocolate Bar Partition", index: "S5", status: ProblemStatus.AttemptLater, notes: "Difficult DP state and transitions. Note that you can get 12/15 points without concerning about an O(n) algorithm." },
    ],
  },

  {
    name: "CCC 2025",
    notes: `
      By far my best CCC performance but I definitely got lucky on the third problem
      being heavily based on data structures. Also, I participated unofficially because I am old.
      Got 10 points on S4 and 2 points on S5 to get a total of 57/75 points,
      which is huge progress from the last two years' contests.
    `,
    problems: [
      { name: "Roller Coaster Ride", index: "J1", status: ProblemStatus.Solved, notes: "One line of python code, probably." },
      { name: "Donut Shop", index: "J2", status: ProblemStatus.Solved, notes: "Why do I ever write notes for these problems???" },
      { name: "Product Codes", index: "J3", status: ProblemStatus.Solved, notes: "Read the problem statement carefully. Iterate through the string and keep track of the current number (if any) and the rest of the string. Note that, e.g., '73-2' should be 73 - 2 = 71." },
      { name: "Sunny Days", index: "J4", status: ProblemStatus.Solved, notes: "Be very careful when it says 'exactly one day'. If all the days are reported as 'S', then one of them is still wrong." },
      { name: "Connecting Territories", index: "J5", status: ProblemStatus.NeedsReview, notes: "For some reason, you only ever take one value per row. Thus, you can use DP where your transition is to take one of the <= 3 paths from the current tile. Note that storing the entire DP state in memory at once would probably MLE. Instead, you only need to consider the current row and the next row each time. Should review why this assumption works." },
      { name: "Positioning Peter's Paintings", index: "S1", status: ProblemStatus.Solved, notes: "After carefully thinking about the problems (just visual a few examples really), you can reduce it to exactly two cases and then take the minimum of those." },
      { name: "Cryptogram Cracking Club", index: "S2", status: ProblemStatus.Solved, notes: "You can use `char c; int v; while (cin >> c) { cin >> v; ... }` for reading input (though you probably need to cin >> string first then use istringstream...). Compute the total length then take index modulo that length. Then find the character in one pass." },
      { name: "Pretty Pens", index: "S3", status: ProblemStatus.Solved, notes: "Generalize the updates and use them to build the initial array as well. You can remove the contribution for the answer for everything affected, then update, then add the contributions back. Note that the multiset `count` function is linear with respect to the number of equivalent items in the multiset." },
      { name: "Floor is Lava", index: "S4", status: ProblemStatus.Solved, notes: "Consider the line graph of the given graph. The weights of this new graph are the differences of the temperatures of the two edges. Being within a 'node' of the line graph is equivalent to being able to freely access any of the adjacent nodes in the original graph; thus, the problems are equivalent. However, the number of edges in this graph is far too many. Instead, we can observe that, for a node with incident edges of temperatures a <= b <= c, the path out of a and into c is equivalent to the path out of a, into b, out of b, then into c. Thus, we can sort all the incident edges by temperature and only add edges in the line graph between edges with adjacent temperature values." },
      { name: "To-Do List", index: "S5", status: ProblemStatus.AttemptLater, notes: "It is optimal to always be doing homework whenever possible. Treat the homework tasks as segments that can move to the right but not left. Adding a segment might move some other segments around, and thus merge some 'groups' of segments together. In each group, maintain the earliest start position of a segment and the sum of the segment lengths. Whenever a new segment is added that overlaps with an existing group, or a group expands to overlap with other segments, join the segments together. This can be implemented in O(qlogq) time complexity. However, I have yet to find a way to handle the removal queries." },
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
      { name: "From 1 to Infinity", index: "D", status: ProblemStatus.Solved, notes: "Binary search to find which number the string ends with, then count the digit sum of numbers before that and the prefix of the last number that is still within the string. There is a formula to find the sum of all digits of numbers between 1 and n. Let d(n) be the sum of the digits of n and f(n) be the sum of the digits of numbers from 1 to n. Then, let n = 10*q + r, where r = n%10. The contribution of the ones digit is 9*(9+1)/2 * q for all the full 0,1,2,...,9 patterns plus the pattern at the end which is 0+1+2+...+r = r(r+1)/2. Then the rest of the digits contribute f(q-1) 10 times each (because the values 1...(q-1) each occur with every value of r). The digits of q contribute r+1 times. The final formula is f(n) = 45q + r(r+1)/2 + f(q-1)*10 + d(q)*(r+1)." },
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
      My 88th Codeforces contest. Alright ranking, set to gain a small amount of rating,
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
  },

  {
    name: "CF Round 1046",
    notes: `
      My 89th Codeforces contest. This felt like a much better contest than any of my previous
      10+ rounds (excluding the div 3) because I was more focused and able to solve more problems.
      I'm now on a 3-contest positive delta streak, which I haven't accomplished since April (last
      time I was candidate master on the platform). My slow solving of D prevented me from
      focusing on F1, which turned out to be a pretty simple problem. I mostly struggled with getting
      stuck on certain problems (B and D) where I felt like I could never think of a better approach.
      However, I kept thinking about the problems regardless and, albeit quite slowly, came up with
      the right approaches to those problems in the end."
    `,
    problems: [
      { name: "In the Dream", index: "2A", status: ProblemStatus.Solved, notes: "Can compute the second-half scores using the information given. Then, the higher-scoring team can at most get 2+2*<the other team's score>. E.g. if team A and B are playing, then the goals could look like AABAABAABAABAA, which is (AA)+(BAA)^N." },
      { name: "Like the Bitset", index: "2B", status: ProblemStatus.Solved, notes: "I felt like I would never solve this problem and this was going to kill my performance. However, I kept finding small observations regardless and eventually found a solution. If there is a group of ones of size |ones| >= k, then you can position the range entirely within that group to create a contradiction (every element must be greater than all the other ones). Thus, there cannot be any groups of size |ones| >= k. Otherwise, every range will contain at least one index i such that s[i] = 0. Thus, assign those values numbers larger than all the values assigned to the indices with s[i] = 1. The main observation that helped me solve the problem was about the group sizes. Once I proved that condition, it was easy to find the rest of the solution." },
      { name: "Against the Difference", index: "1A", status: ProblemStatus.Solved, notes: "At some point, I realized that you have O(n) 'ranges' that represent which values you take. You want to maximize the sum of the ranges' values without overlapping any. Thus, the problem reduces to a classical DP problem. You can also think of it more directly as dp[i] considers two transitions: take the current value as part of a new block or leave it and take dp[i+1]." },
      { name: "For the Champion", index: "1B", status: ProblemStatus.Solved, notes: "Considering all the points is a mess. Maybe there is a way to isolate one point? Move up and right by 2*10^9 each. Now, the closest point is the same point as the one closest to the corner at (10^9, 10^9). Subtract that point's distance from the latest query answer to get the distance from the robot's current position to the top-right corner. Let this distance be d1=dx+dy. It is not possible to find the answer with any standard techniques like binary search, and you should not use the other points too much (you also have to solve the problem for n=1). Thus, we need some new information. Move left by 4*10^9 to arrive at the top-left corner. Now the distance to the corner (-10^9, 10^9) is d2=(2*10^9-x)+y. We know d1 and d2 so we can solve for x and y. Since we know where the position of the corner and the robot's offset from that position, we can solve find the robot's position. It might help on these problems to write code iteratively. Otherwise, I write a bunch of code and then get lost in debugging it. Walking through the code slowly allowed me to see what the problem was and submit my code. However, about 70% of my time on this problem was trying to find the x and y offsets, and implementation only took 30% of the time (though, I am guessing the proportions)." },
      { name: "By the Assignment", index: "1C", status: ProblemStatus.Solved, notes: "There is only one possible path on a non-cyclic part of the graph, so we only really have to consider the cycles. In a cycle of even length, all the nodes' values must be equal. In a cycle of odd length, those values must also be 0. We can split the graph into 2-edge-connected components (bridge tree nodes) and solve for each component independently. All the values in each component must be the same, and the values in a component with any odd-length cycle must be 0. You can find whether a component has an odd-length cycle by trying to construct a bipartite colouring. If that fails, then there is an odd-length cycle somewhere in the component." },
      { name: "From the Unknown (Easy Version)", index: "1D1", status: ProblemStatus.Solved, notes: "If we query with a = [1, 1, 1, 1, ..., 1] and |a| = k, where k = 10^5, then we get l = ceil(10^5/w). You can convert this equality into an inequality l-1 < k/w <= l and solve for w: ceil(k/l) <= w < ceil(k/(l-1))-1. Let L = ceil(k/l) and R = ceil(k/(l-1))-1. There are R-L+1 possible values for w. Note that 2L >= R <=> L >= R-L. We can think about checking each possible value. To check whether w > L, we can query a = [L, 1]. To check whether W > L+1, we can query a = [L, 2]. We can repeat this process and combine all these queries into one: a = [L, 1, L, 2, L, 3, ..., L, R-L]. It works to combine them because we know that L+1+L > 2L >= R >= w, so each query will start on a new line. The number of lines then tells you many of the inequalities w > x are true for x in [L, R]." },
      { name: "From the Unknown (Hard Version)", index: "1D2", status: ProblemStatus.AttemptLater, notes: "An interesting problem to think about..." },
      { name: "Beyond the Palindrome (Easy Version)", index: "1E1", status: ProblemStatus.NotAttempted },
      { name: "Beyond the Palindrome (Hard Version)", index: "1E2", status: ProblemStatus.NotAttempted },
      { name: "To the Infinity", index: "1F", status: ProblemStatus.NotAttempted },
    ],
  }
];

