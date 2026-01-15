<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/class">
        <html>
            <body>
                <h2>Student list</h2>

                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Nick Name</th>
                    </tr>
                    <xsl:for-each select="students">
                        <tr>
                            <td>
                                <xsl:value-of select="firstname"></xsl:value-of>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>