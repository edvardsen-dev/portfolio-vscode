export function splitPatchIntoHunks(patchString: string): string[] {
  const hunkRegex = /^@@ -(\d+,\d+) \+(\d+,\d+) @@.*$/gm; // Matches hunk headers
  const hunks: string[] = [];
  let lastIndex = 0;

  let match;
  while ((match = hunkRegex.exec(patchString)) !== null) {
    // Extract the content *before* the current hunk header
    const hunkStart = lastIndex;
    const hunkEnd = match.index;
    if (hunkStart !== hunkEnd) {
      hunks.push(patchString.substring(hunkStart, hunkEnd).trim()); // Trim to remove leading/trailing whitespace
    }

    // Update lastIndex to *after* the current hunk header
    lastIndex = match.index + match[0].length;
  }

  // Add the last hunk (if any)
  if (lastIndex < patchString.length) {
    hunks.push(patchString.substring(lastIndex).trim());
  }

  return hunks;
}
