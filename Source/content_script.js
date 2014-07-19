walk(document.body);

function walk(node)
{
	// The author of cloud-to-butt stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	
	// in compound activities
	v = v.replace(/\bgrowth hacking\b/g, "growth wizardry");
	v = v.replace(/\bGrowth hacking\b/g, "Growth wizardry");
	v = v.replace(/\bGrowth Hacking\b/g, "Growth Wizardry");
		
	// as an activity
	v = v.replace(/\bhacking\b/g, "enchanting");
	v = v.replace(/\bHacking\b/g, "Enchanting");
	
	// just hacker(s)
	v = v.replace(/\bhacker\b/g, "wizard");
	v = v.replace(/\bHacker\b/g, "Wizard");
	v = v.replace(/\bHACKER\b/g, "WIZARD");
	v = v.replace(/\bhackers\b/g, "wizards");
	v = v.replace(/\bHackers\b/g, "Wizards");
	v = v.replace(/\bHACKERs\b/g, "WIZARDS");
	
	// the hack(s)
	v = v.replace(/\bhack\b/g, "entchantment");
	v = v.replace(/\bHack\b/g, "Entchantment");
	v = v.replace(/\bhacks\b/g, "entchantments");
	v = v.replace(/\bHacks\b/g, "Entchantments");

	// there's really stupid compounds
	v = v.replace(/\bgrowthhacker\b/g, "growthwizard");
	v = v.replace(/\bgrowthhackers\b/g, "growthwizards");
	
	textNode.nodeValue = v;
}
