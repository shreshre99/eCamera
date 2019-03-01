GLChina version

2012/12/05
-Support Win8 MF preview.
-Restructure video formats, procamp & camera ctrl properties.
-Fix: alloc 0 bytes for extra res array, which cause Verifier bug check.
-Fix: alloc with tag = 0 will cause bug check.
-Fix: data ranges ptr array size wrong.

2012/02/10
-AMCap: 1.modify ratios. 2.Detect zoom's GPIO for GL862EC and GL862E.
-Also include uninstall dll bug.

2011/12/01
-InstallShield setup can choose install type by ini file. Add GL logo page.
-AMCap: Modify zoom ratios. GPIO 0 for zoom button.
-monitorpad: Specify -1 for PID/VID to match all devices.

2011/09/20
-Modify amcap.exe: add recording video with > VGA resolution.

20110/09/06
-Add some extra resolutions.
-Make some global structures dynamically allocated, which may be used by different device instances.
-Fix bug: size of dynamically allocated "DataRanges" didn't take account of extra resolutions; BSD.
-LED flag to control if lit in preview instantly; default not lit.

2011/08/08
-Add extra resolutions thru INF.
-LED flag to control if it's lit when preview.
-Refine image processing procedure.

2010/12/20
-Add face tracking
-Add extra resolutions

2010/11/24
-Remove oem files from driver store in Vista/Win7 when uninstalling.
-Increase ISO packet number.
-Check ISO packet error.
-Increase pin data range count.
-Remove hard-code VS & VC interface number.

2010/08/25
-Support special effect, mask, zoom; provide property page.
-Mask files are not provided in main branch.

2010/07/22
-Support INF & Setup.exe installation/uninstallation.
-Refresh device manager after uninstallation.

2010/03/18
-Add ProductName.ini to configure device name, company name, and etc.
--Default resolution is now consistent with UVC driver.

2010/03/03
-Add hardware trigger snapshot.
-Fix bug: preview black after resuming from S3/S4.
-Add reboot dialog after installation.

2009/12/29
-Fix bug: In STOP the HC may hang up.
-Auto detect bulk mode.
-Fall back alternate settings when bandwidth is not enough.
-I420 restricted up to VGA.
-Fix bug: captured images not rotated from still pin.
-Add MJPG format preview.
-Select non-zero alternate settings according to their MaxPacketSize.

2009/12/03
-Passed DTM for WinXP, Vista 32-bit, Vista 64-bit, Win7 32-bit, and Win7 64-bit.
-Add rotate-image & drop-frame functions and their registry flags.
-Add I420 back.
-Fix: image rotation in still pin.

2009/11/xx
-Fix some INF sections.
-Add auto-install program setup.exe.

2009/11/02
-Add still capture function.