# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if(list2 == None):
            return list1
        if(list1 == None):
            return list2
        if list1.val < list2.val:
            head = list1
            head.next = self.mergeTwoLists(list1.next, list2)
        else:
            list2
            head = list2
            head.next = self.mergeTwoLists(list1, list2.next)

        return head
