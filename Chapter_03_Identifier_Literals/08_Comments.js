// ============================================================================
// 08_Comments.js
// ============================================================================
// This file demonstrates all possible commenting styles used in Java.
// NOTE: Java and JavaScript share the exact same comment syntax.
// The examples below are written in valid JavaScript so the file runs
// without errors, while the comment styles themselves mirror Java conventions.
// ============================================================================

/**
 * 1. JAVADOC COMMENT (Documentation Comment)
 * ============================================================
 * This is a Javadoc-style comment. It begins with /** and ends with * /.
 * In Java, Javadoc comments are used to generate HTML documentation using
 * the javadoc tool. In JavaScript, the equivalent is JSDoc.
 *
 * They are typically placed before classes, functions, methods, and fields.
 *
 * @author  John Doe
 * @version 1.0
 * @since   2024-01-01
 * @see     https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html
 */
class CommentsDemo {

    /**
     * The maximum number of login attempts allowed before lockout.
     * Javadoc tags like @value, @code, and @link can be used inline.
     */
    static MAX_LOGIN_ATTEMPTS = 5;

    /**
     * Calculates the sum of two numbers.
     *
     * @param {number} a the first number to add
     * @param {number} b the second number to add
     * @returns {number} the sum of a and b
     * @deprecated Use addExact() instead.
     */
    add(a, b) {
        return a + b;
    }

    /* =========================================================================
     * 2. MULTI-LINE COMMENT (Block Comment)
     * =========================================================================
     * This is a traditional multi-line comment (block comment).
     * It starts with /* and ends with the first * / encountered.
     *
     * Use cases in Java:
     * - Temporarily disabling a large block of code during debugging.
     * - Adding detailed explanations that span multiple lines.
     * - Section headers or file-level descriptions.
     * - Providing copyright/license notices at the top of files.
     * ========================================================================= */

    blockCommentExample() {
        /*
         * The asterisks on the left are optional but improve readability.
         * This entire block is ignored by the compiler.
         */
        let x = 10; /* A block comment can also appear at the end of a line,
                       spanning multiple lines if needed. */
    }

    // ========================================================================
    // 3. SINGLE-LINE COMMENT
    // ========================================================================
    // This is a single-line comment. It starts with // and continues to the end
    // of the current line. It is the most common comment type in Java.
    //
    // Use cases:
    // - Brief explanations of a single line or block of code.
    // - Marking TODOs or FIXMEs.
    // - Temporarily disabling a single line of code.
    // ========================================================================

    singleLineCommentExample() {
        let speed = 60; // Speed in kilometers per hour

        // TODO: Refactor this loop for better performance
        for (let i = 0; i < 10; i++) {
            console.log(i); // Print current index
        }

        // console.log("This line is temporarily disabled.");
    }

    /**
     * 4. INLINE COMMENT (End-of-Line Comment)
     * --------------------------------------------------------
     * Inline comments appear on the same line as executable code.
     * They should be short and placed at least one space after the code.
     * Overuse can reduce readability.
     */
    inlineCommentExample() {
        let width = 100;   // Width in pixels
        let height = 200;  // Height in pixels
        let area = width * height; // Calculate rectangle area

        // Avoid excessive inline comments for obvious code:
        let count = 0; // set count to zero (redundant, not recommended)
    }

    /* 5. NESTED-STYLE BLOCK COMMENT (Still a single block comment) */
    nestedStyleExample() {
        /*
         * You cannot actually nest block comments inside each other in Java.
         * The first "*/" will always terminate the block comment.
         *
         * For example, the following would be a SYNTAX ERROR:
         *
         *   /* outer start
         *      /* inner start */
         *      outer end -> this would be compiled as code! ERROR!
         *   */
         *
         * Workaround: Use multiple single-line comments or a Javadoc-style
         *             approach if you need to describe nested logic.
         */
    }

    // =========================================================================
    // 6. FILE HEADER / COPYRIGHT COMMENT (Using Block Comments)
    // =========================================================================
    // Often placed at the very top of a .java file. Since Javadoc is meant for
    // API documentation, plain block comments are preferred for copyright.
    //
    // Example:
    // /*
    //  * Copyright (c) 2024 Example Corp. All rights reserved.
    //  * Licensed under the MIT License.
    //  */
    // =========================================================================

    /**
     * 7. JAVADOC INLINE TAGS
     * ----------------------
     * Javadoc supports several useful inline tags:
     *
     * {@code text}       - Formats text in code font.
     * {@link ClassName}  - Creates a hyperlink to another class/member.
     * {@literal text}   - Displays text without interpreting HTML.
     * {@value}           - Displays the value of a static constant.
     * {@inheritDoc}      - Copies documentation from the nearest superclass/interface.
     */

    /**
     * {@inheritDoc}
     * This implementation adds two positive integers.
     */
    addExact(a, b) {
        return Math.floor(a + b); // Simplified for JS example
    }

    /**
     * 8. TRICKY / EDGE CASES
     * ----------------------
     * Be careful with comments inside string literals.
     * The text inside a string is NEVER treated as a comment.
     */
    trickyCases() {
        let notAComment = "This is NOT a // comment";
        let alsoNot = "This is NOT a /* comment */ either";

        // The '//' and '/* */' inside the string above are literal characters.

        // Be careful with unicode escapes before comments:
        // \u002a\u002f is the unicode for */ and would end a comment unexpectedly!
    }

}

// Export the class so it can be used as a module (valid JS)
module.exports = CommentsDemo;

/*
 * ============================= SUMMARY =============================
 * 1. //                 -> Single-line comment
 * 2. /* ... * /         -> Multi-line (block) comment
 * 3. /** ... * /        -> Javadoc / JSDoc (documentation) comment
 * 4. Inline //          -> End-of-line comment on same line as code
 * 5. Block headers      -> File copyright / section dividers
 * 6. Javadoc Tags       -> @param, @return, @throws, @deprecated, @see, etc.
 * 7. Inline Javadoc     -> {@link}, {@code}, {@literal}, {@value}, {@inheritDoc}
 * 8. Important Rule     -> Block comments do NOT nest in Java or JavaScript.
 * ===================================================================
 */
