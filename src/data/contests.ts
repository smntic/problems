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
      { name: "Radar", index: "H", status: ProblemStatus.NotAttempted, notes: "Impossible to solve on Codeforces due to faulty test data. Otherwise, the main difficulty with the problem is parsing the problem statement. Just binary search over two problems independently." },
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
      { name: "ABC String", index: "A", status: ProblemStatus.NotAttempted, notes: "String problem." },
      { name: "Acceptable Seating Arrangements", index: "B", status: ProblemStatus.NotAttempted, notes: "Seemed difficult." },
      { name: "Candy Factory", index: "C", status: ProblemStatus.NotAttempted, notes: "Came up with a connection to a classical problem, but looked too inefficient." },
      { name: "Cramming for Finals", index: "D", status: ProblemStatus.NotAttempted, notes: "Intimidating geometry problem." },
      { name: "Eccentric Excursion", index: "E", status: ProblemStatus.NotAttempted, notes: "Had some ideas with brute force, but nothing concrete." },
      { name: "Item Selection", index: "F", status: ProblemStatus.Solved, notes: "This problem was fine. We struggled with the edge case of not needing to do any operations. Also, parsing the problem statement was challenging." },
      { name: "Matrix Fraud", index: "G", status: ProblemStatus.NotAttempted, notes: "Did not attempt." },
      { name: "On-Call Team", index: "H", status: ProblemStatus.NotAttempted, notes: "I thought there was some connection to flows, or some way to query in O(log n) per bitmask, but neither seemed like it would work." },
      { name: "Range Editing", index: "I", status: ProblemStatus.NeedsImplementation, notes: "I had exactly the right idea with DP. Apparently the reduction in state/transition complexity is non-trivial, but I came up with it quickly. I just struggled on implementation." },
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
];

