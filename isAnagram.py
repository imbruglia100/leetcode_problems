# Easy

def isAnagram(s:str, t:str) -> bool:
    if len(s) != len(t): return False

    return sorted(s) == sorted(t)

isAnagram('abc', 'cna')
